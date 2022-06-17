import React from 'react';
import { connect, IntentCtx, RenderFieldExtensionCtx, RenderManualFieldExtensionConfigScreenCtx } from 'datocms-plugin-sdk';
import { render } from './utils/render';
import ConfigScreen from './entrypoints/ConfigScreen';
import ReactDOM from 'react-dom';
import SingleSelectEditor from './entrypoints/SingleSelectEditor';
import SingleSelectConfigScreen from './entrypoints/SingleSelectConfigScreen';

import 'datocms-react-ui/styles.css';


connect({
  renderConfigScreen(ctx) {
    return render(<ConfigScreen ctx={ctx} />);
  },
  manualFieldExtensions(ctx: IntentCtx) {
    return [
      {
        id: 'singleSelectReact',
        name: 'Single Select React',
        type: 'editor',
        fieldTypes: ['json'],
        configurable: true,
      },
    ];
  },
  renderFieldExtension(fieldExtensionId: string, ctx: RenderFieldExtensionCtx) {
    switch(fieldExtensionId) {
      case 'singleSelectReact':
        return render(<SingleSelectEditor ctx={ctx} />);
    }
  },
  renderManualFieldExtensionConfigScreen(
    fieldExtensionId: string,
    ctx: RenderManualFieldExtensionConfigScreenCtx
  ) {
    ReactDOM.render(
      <React.StrictMode>
        <SingleSelectConfigScreen ctx={ctx} />
      </React.StrictMode>,
      document.getElementById('root'),
    )
  }
});