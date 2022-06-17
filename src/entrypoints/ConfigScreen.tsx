import { RenderConfigScreenCtx } from 'datocms-plugin-sdk';
import { Canvas } from 'datocms-react-ui';

type Props = {
  ctx: RenderConfigScreenCtx;
};

export default function ConfigScreen({ ctx }: Props) {
  return (
    <Canvas ctx={ctx}>
      <p>Welcome to Single Select React!</p>
      <p>Thank you for downloading and using this plugin, it was created after the original Single Select wasn't viable enough for production ready applications where multiple single select fields would be used, and persistence on page loading was key.</p>

      <p>This plugin is currently on v0.2.0, it works as it needs too, but there will be feature patch + minor updates for styling in due time.</p>
    </Canvas>
  );
}
