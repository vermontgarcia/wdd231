import Header from '../components/Header.mjs';
import ExternalServices from '../services/ExternalServices.mjs';
import { aboutUs } from './helpers/consts.mjs';
import {
  addAboutUs,
  addOurMission,
  addOurStory,
  addOurValues,
  addWhyChooseUs,
} from './helpers/templates.mjs';
import { qs } from './helpers/utils.mjs';

const container = qs('header');
const header = new Header({ wayfinding: aboutUs, container });

header.init();

const servicesAPIClient = new ExternalServices();

const setAbout = async () => {
  const {
    aboutUsSpeach,
    ourStorySpeach,
    ourMissionSpeach,
    ourValuesSpeach,
    whyChooseUsSpeach,
  } = await servicesAPIClient.getAboutUs();
  addAboutUs(aboutUsSpeach);
  addOurStory(ourStorySpeach);
  addOurMission(ourMissionSpeach);
  addOurValues(ourValuesSpeach);
  addWhyChooseUs(whyChooseUsSpeach);
};

setAbout();
