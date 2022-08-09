import React from "react"
import Parser from "html-react-parser"

const GerenicTable = ({ data }) => {
  const getValues = (props) => {
    let html = ""

    Object.keys(props).map(function (keyName, keyIndex) {
      html = html.concat(`<td>${props[keyName]}</td>`)
    })
    return html
  }

  return (
    <div className="center">
      <table className='genericTable'>
        <thead>
            {Object.keys(data[0]).map((key, index) => (
              <th>{key}</th>
            ))}
        </thead>
        <tbody>
          {data.map((element) => {
            return <tr>{Parser(getValues(element))}</tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default GerenicTable
