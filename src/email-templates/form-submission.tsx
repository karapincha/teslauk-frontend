export const formSubmissionTemplate = (values: any, heading?: string) => {
  /* Iterate through values and create an HTML table */
  const table = Object.keys(values)
    .sort()
    .map((key: string) => {
      return `<tr>
      <td>${key}</td>
      <td>${values[key]}</td>
    </tr>`
    })
    .join('')

  /* Create the HTML email */
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tesla Owners UK</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        line-height: 1.5;
        color: #040D1F;
      }
      table {
        width: 100%;
        max-width: 620px;
        border-collapse: collapse;
        background-color: #fff;
      }
      table th, table td {
        padding: 8px;
        border: 1px solid #C2D0DE;
      }
      table th {
        font-weight: bold;
        text-align: left;

      }
      table tr:nth-child(even) {
        background-color: #ECF2F6;
      }
      table tr:nth-child(odd) {
        background-color: #fff;
      }
      table tr:hover {
        background-color: #ECF2F6;
      }
      table th {
        background-color: #273040;
        color: #fff;
      }
      table th:first-child {
        width: 100px;
      }
      table th:last-child {
        width: 100px;
      }
      table td:last-child {
        text-align: right;
      }
      table td:first-child {
        text-align: left;
      }
      table td:nth-child(2) {
        text-align: center;
      }
      table td:nth-child(3) {
        text-align: right;
      }
      table td:nth-child(4) {
        text-align: right;
      }
      table td:nth-child(5) {
        text-align: right;
      }

      div.header {
        width: 100%;
        max-width: 620px;
        background-color: #F8FBFD;
        text-align: center;
        padding-top: 16px;
        padding-bottom: 16px;
      }

      div.header img {
        display: inline-block;
      }

      div.header h1 {
        margin: 0;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <img src="http://teslaowners.kp.lk/wp-content/uploads/2022/06/touk-logo.png" width="100px" height="100px" alt="TOUK Logo" />

      <h1>${heading || 'Form Submission'}</h1>
    </div>

    <table>
      <thead>
        <tr>
          <th>Field</th> 
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        ${table}
      </tbody>
    </table>
  </body>
  </html>`

  return html
}
