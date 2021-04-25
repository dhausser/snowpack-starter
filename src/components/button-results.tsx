import React from "react";
import type { UseFormReset } from "react-hook-form"
import type { defaultValues } from './antd-hook-form'

interface ButtonProps {
  data: typeof defaultValues,
  reset: UseFormReset<typeof defaultValues>
}

export function ButtonResults({ data, reset }: ButtonProps) {
  return (
    <>
      {data && (
        <pre style={{ textAlign: "left", color: "white" }}>
          {JSON.stringify(
            {
              ...data,
            },
            null,
            2
          )}
        </pre>
      )}

      <button
        className="button buttonBlack"
        type="button"
        onClick={() => {
          reset({
            AntdInput: "Test",
            AntdCheckbox: true,
            AntdSwitch: true,
            AntdSlider: 20,
            AntdRadio: 1,
            AntdSelect: "",
          });
        }}
      >
        Reset Form
      </button>
      <button className="button">submit</button>
    </>
  );
}
