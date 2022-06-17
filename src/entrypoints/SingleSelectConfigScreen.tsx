import { RenderManualFieldExtensionConfigScreenCtx } from 'datocms-plugin-sdk';
import { Canvas, Form, TextField } from 'datocms-react-ui';
import { useCallback, useState } from 'react';

type PropTypes = {
    ctx: RenderManualFieldExtensionConfigScreenCtx
}

// This is how we want to save our settings
type Parameters = {
    options: string[],
}

function SingleSelectConfigScreen({ ctx }: PropTypes) {
    const [formValues, setFormValues] = useState<Partial<Parameters>>(
        ctx.parameters
    )

    const update = useCallback((field, value) => {
        const values = value.split(',');
        const newParameters = { ...formValues, [field]: values };
        setFormValues(newParameters);
        ctx.setParameters(newParameters);
    }, [formValues, setFormValues, ctx]);

    return (
        <Canvas ctx={ctx}>
            <Form>
                <TextField
                    id="options"
                    name="options"
                    label="Options"
                    hint="List of comma separated allowed values. Only use type of string in this field."
                    required
                    value={formValues.options}
                    onChange={update.bind(null, 'options')} />
            </Form>
        </Canvas>
    )
};

export default SingleSelectConfigScreen