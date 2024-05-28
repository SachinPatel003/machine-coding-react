import { ShoreX as ShoreXModule } from './modules/shorex';
import { ShorexSlider as ShorexSliderModule } from './modules/shorex-slider';
import withErrorBoundary from './hoc/withErrorBoundary';
import withRedux from './hoc/withRedux';
import withRequiredProps from './hoc/withRequiredProps';
import withRouter from './hoc/withRouter';

const ShoreX = withErrorBoundary(withRequiredProps(withRedux(withRouter(ShoreXModule))))
const ShorexSlider = withErrorBoundary(withRouter(withRedux(ShorexSliderModule)))

export { ShoreX, ShorexSlider }
