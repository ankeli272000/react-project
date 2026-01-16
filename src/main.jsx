
import { createRoot } from 'react-dom/client'

const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>elsa</td>
    </tr>
  </table>
);

createRoot(document.getElementById('roots')).render(
  <p><h1>Hello react</h1></p>
  
)

