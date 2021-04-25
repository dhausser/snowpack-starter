import * as React from 'react'
import { Controller, Control } from 'react-hook-form'
import {
  Input,
  Select,
  Checkbox as AntdCheckbox,
  Switch as AntdSwitch,
  Slider as AntdSlider,
  Radio,
} from 'antd'

export const defaultValues = {
  AntdInput: "Test",
  AntdCheckbox: true,
  AntdSwitch: true,
  AntdSlider: 20,
  AntdRadio: 1,
  AntdSelect: "",
};

const { Option } = Select

export function AntdForm({ control }: { control: Control<typeof defaultValues> }) {
  return (
      <div className="container">
        <section>
          <label>Antd Input</label>
          <Controller
            control={control}
            name="AntdInput"
            render={({ field }) => <Input {...field} />}
          />
        </section>

        <section>
          <label>Antd Checkbox</label>
          <Controller
            control={control}
            name="AntdCheckbox"
            render={({ field: { value, onChange } }) => (
              <AntdCheckbox
                checked={value}
                onChange={(e) => {
                  onChange(e.target.checked)
                }}
              />
            )}
          />
        </section>

        <section>
          <label>Antd Switch</label>
          <Controller
            control={control}
            name="AntdSwitch"
            render={({ field: { value, onChange } }) => (
              <AntdSwitch onChange={onChange} checked={value} />
            )}
          />
        </section>

        <section>
          <label>Antd Select</label>
          <Controller
            control={control}
            name="AntdSelect"
            render={({ field }) => (
              <Select {...field} defaultValue="lucy">
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            )}
          />
        </section>

        <section>
          <label>Antd Slider</label>
          <Controller
            control={control}
            name="AntdSlider"
            render={({ field }) => <AntdSlider {...field} />}
          />
        </section>

        <section>
          <label>Antd Radio</label>
          <Controller
            control={control}
            name="AntdRadio"
            render={({ field: { onChange, value } }) => (
              <Radio.Group
                value={value}
                onChange={(e) => onChange(e.target.value)}
              >
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4}>D</Radio>
              </Radio.Group>
            )}
          />
        </section>
      </div>
  )
}
