import { ColorRing } from 'react-loader-spinner';

function Loader() {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#5953B7', '#066FAB', '#28B9CD', '#2855CD']}
    />
  );
}

export default Loader;
