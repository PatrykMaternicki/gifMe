import waitingGif from '../assets/waiting.gif';
import searchedGif from '../assets/searched.gif';
import notFoundGif from '../assets/not_found.gif';
import errorGif from '../assets/error.gif';

const Handler = ({ className, src, title }) => (
  <div className={`${className}__started`}>
    <p className={`${className}__paragraph`}>{title}</p>
    <img alt="" className={`${className}__img`} src={src} />
  </div>
);

const factory = (state, className) => {
  const states = {
    STARTED: {
      src: waitingGif,
      title: 'Type something to found some GIFs.',
    },
    SEARCHED: {
      src: searchedGif,
      title: 'Searching...',
    },
    NOT_FOUND: {
      src: notFoundGif,
      title: 'Ups. No results',
    },
    ERROR: {
      src: errorGif,
      title: 'Ups. Something wrong. Did you install Adobe Reader?',
    },
  };
  const pickedState = states[state];
  return <Handler className={className} src={pickedState.src} title={pickedState.title} />;
};

const AppStateComponent = ({ appState, className = 'componentAppState' }) => (
  <div className={className}>
    {factory(appState, className)}
  </div>
);
export default AppStateComponent;
