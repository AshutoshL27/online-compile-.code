import React, { useContext, useState } from 'react'
import './style.css';
import EditorWindow from '../../components/dev/DevEditor';
import { Context } from '../../context/Provider';
import LanguageSelector from '../../components/dev/LanguageSelector';
import CustomInputWindow from '../../components/dev/CustomInputWindow';
import OutputWindow from '../../components/dev/OutputWindow';
import StatusReport from '../../components/dev/StatusReport';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Dev() {

  // const [language, setLanguage] = useState(availableLanguage[0]);
  const [loading, setLoading] = useState(false);
  const [customInput, setCustomInput] = useState('');
  const [outputDetails, setOutputDetails] = useState(null);

  const { codes, setCodes, language, setLanguage } = useContext(Context);

  function onLanguageChange(selectedLang) {
    setLanguage(selectedLang);
    setCodes('');
    setOutputDetails(null);
    console.log(language);
  }

  function handleSubmit() {
    setLoading(true);

    const formData = {
      language_id: language.id,
      source_code: btoa(codes),
      stdin: btoa(customInput),
    }

    const options = {
      method: "POST",
      url: process.env.REACT_APP_RAPID_API_URL,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      },
      data: formData,
    };


    axios.request(options)
      .then((response) => {
        const token = response.data.token;
        // console.log(token)
        checkStatus(token);
      })
      .catch((error) => {
        let err = error.response ? error.response.data : error;
        let status = error.response?.status;
        if (status === 429) {
          toast.error('Too many attempts!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
        console.error(err);
        setLoading(false);
      })

  }


  async function checkStatus(token) {
    const option = {
      method: 'GET',
      url: process.env.REACT_APP_RAPID_API_URL+'/'+token,
      params: {
        base64_encoded: 'true',
        fields: '*'
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
      },
    }

    try{
      const response  = await axios.request(option);
      const statusId = response.data.status?.id

      if(statusId===1 || statusId===2){
        setTimeout(() => {
          checkStatus(token);
        }, 4000);
      }
      else{
        setLoading(false);
        setOutputDetails(response.data)
        toast.success('Compiled successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
    }
    catch(err){
      console.error(err);
      setLoading(false);
      toast.error('Something went wrong!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }

  }


  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className='Dev'>
        <div className='leftContainer'>
          <LanguageSelector onLanguageChange={onLanguageChange} />
          <EditorWindow onChange={setCodes} language={language?.value} code={codes} />
        </div>
        <div className='rightContainer'>
          <OutputWindow outputDetails={outputDetails} />
          <CustomInputWindow customInput={customInput} setCustomInput={setCustomInput} />
          {
            outputDetails &&
            <StatusReport outputDetails={outputDetails} />
          }
          <button className='submitButton' onClick={handleSubmit} disabled={!codes} style={{opacity: !codes? '0.4': '1'}}>
            {loading ? 'Compiling...' : 'Run'}
          </button>
        </div>
      </div>
    </>
  )
}

export default Dev