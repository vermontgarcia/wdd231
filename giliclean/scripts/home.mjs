import Header from '../components/Header.mjs';
import { home } from './helpers/consts.mjs';
import { qs } from './helpers/utils.mjs';

const headerContainer = qs('header');
const header = new Header({ wayfinding: home, container: headerContainer });
header.init();
