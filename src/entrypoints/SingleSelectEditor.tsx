import get from 'lodash/get';
import { Canvas } from 'datocms-react-ui';
import { RenderFieldExtensionCtx } from 'datocms-plugin-sdk';
import React from 'react';

type PropTypes = {
    ctx: RenderFieldExtensionCtx;
}

type Params = {
    options?: string[];
}

function SingleSelectEditor({ ctx }: PropTypes) {
    const currentValue = get(ctx.formValues, ctx.fieldPath) as string | null;
    const initialValue = currentValue ? JSON.parse(currentValue) : {}

    const values: Params = ctx?.parameters;

    const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        // The below needs to change - this is the structure that is required for it to pass through to a JSON editor field... ngl, i was stuck on this issue for a while. But that was the solution...
        const newValue = `["${e.target.value}"]`;
        await ctx.setFieldValue(ctx.fieldPath, newValue);
    }

    return (
        <Canvas ctx={ctx}>
            <select style={{
                border: "1px solid var(--border-color)",
                padding: "var(--spacing-m) var(--spacing-s)",
                width: "100%",
                color: "var(--body-color)",
                fontSize: "var(--font-size-m)",
                fontFamily: "inherit",
            }}
                onChange={(e) => handleChange(e)}
                defaultValue={initialValue ? initialValue[0] : 'None'}
            >

                <option value="None">None</option>
                {values.options?.map((value: string, i: number) => {
                    return (
                        <option
                            key={value}
                            value={value}
                        >{value}</option>
                    )
                })}
            </select>
        </Canvas >
    )
}

export default SingleSelectEditor