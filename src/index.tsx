import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { useForm } from "react-hook-form";
import { Header } from "./components/header"
import { ButtonResults } from "./components/button-results"
import { AntdForm, defaultValues } from './components/antd-hook-form'

import 'antd/dist/antd.css'
import './styles.css'

let renderCount = 0;

export function App() {
  const { handleSubmit, reset, setValue, control } = useForm({ defaultValues });
  const [data, setData] = useState(defaultValues);
  renderCount++;

  return (
    <form onSubmit={handleSubmit((data) => setData(data))} className="form">
      <Header renderCount={renderCount} />
      <AntdForm control={control} />
      <ButtonResults {...{ data, reset, setValue }} />
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
