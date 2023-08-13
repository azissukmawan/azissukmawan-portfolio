import config from '../../../config.json';
import Profile from '../../assets/profile.jpg';

const sumfetch = async (args: string[]): Promise<string> => {
    return `
    <div style="display: inline-flex; align-items: center;">
    <img style="margin-right: 2em;" src=${Profile.src} width="180px" />       
    <div/>                                           
     sumfetch : Summary display
    -----------
     ABOUT
     ${config.name}
     <u><a href="${config.resume_url}" target="_blank">resume</a></u>
    爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
    -----------
     CONTACT
     <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
     <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
     <u><a href="https://www.linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
    -----------
`;
};

export default sumfetch;
