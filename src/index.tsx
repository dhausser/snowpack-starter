import React from 'react'
import ReactDOM from 'react-dom'
import { useForm } from "react-hook-form";
import { Header } from "./components/header"
import { AntdForm, defaultValues } from './components/antd-hook-form'

import 'antd/dist/antd.css'
import '../styles.css'

// import { Collection } from './components/collection'
// import './index.css'

let renderCount = 0;

function App() {
  const { handleSubmit, control } = useForm({ defaultValues });
  // const [, setData] = useState(null);
  renderCount++;

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))} className="form">
      <Header renderCount={renderCount} />
      <AntdForm control={control} />
    </form>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
