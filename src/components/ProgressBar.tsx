
type ProgressBarProps = {
    progress: number;
  };
  
  const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
    const progressBarStyles = {
      width: `${progress}%`,
    
    };
  
    return (
      <div className='w-full bg-gray-200 rounded-full h-2.5 my-12 dark:bg-gray-700'>
        <div id="ProgressBar"
          className='bg-yellow-400 h-2.5 rounded-full '
          style={progressBarStyles}
        ></div>
      </div>
    );
  };
  
  export default ProgressBar;
  