import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jlab-ext extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jlab-ext',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jlab-ext is activated!');
  }
};

export default extension;
