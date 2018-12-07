// enzyme set up - file needs to be called setupTests.js (jest requirement)
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter()});