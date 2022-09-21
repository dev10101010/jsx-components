import React from "react"
import Parser from "html-react-parser"
import { useNavigate } from "react-router-dom";
import { downloadFile } from '../../../helpers/files/downloadFile';

const GerenicTable = ({ data, downloable }) => {


  let navigate = useNavigate();
  const routeChange = (pathId) => {
    navigate(`/invoices/${pathId}`);
  };

  const getValues = (props) => {
    let html = ""

    Object.keys(props).map((keyName, keyIndex) => {
      if(props[keyName][1]){
        html = html.concat(`<td>${props[keyName][0]}</td>`)
      }
    })
    return html
  }

  return (
    <div className="center">
      <table className='genericTable'>
        <thead>
            {
              Object.keys(data[0]).map((key, index) => (
                data[0][key][1] ? <th>{key}</th> : null
             ))
            }
        </thead>
        <tbody>
          {
            data.map((element) => {
              console.log(element)
              return (
                <>
                <tr onClick={() => (routeChange(element.uid[0]))}>
                  {Parser(getValues(element))}
                </tr>

                {downloable ? <button className={'downloadButton'} onClick={() => downloadFile(element.fileName[0])} title="Descargar">⬇️</button> : null}
                </>
              )
            })
          }

        </tbody>
      </table>
    </div>
  )
}

export default GerenicTable
