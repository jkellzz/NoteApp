const styles = theme => ({
    newNoteBut: {
      width: '100%',
      height: '50px',
      borderBottom: '1px solid black',
      borderRadius: '20px',
      backgroundColor: 'lightgrey',
      color: 'black',
      '&:hover': {
        backgroundColor: 'white'
      }
    },
    
    SideNavCont: {
      marginTop: '0px',
      width: '300px',
      height: '100%',
      boxSizing: 'border-box',
      float: 'left',
      overflowY: 'scroll',
      overflowX: 'hidden'
   
    },
    noteSubmit: {
      width: '50%',
      marginLeft: '75px',
      backgroundColor: 'green',
      borderRadius: '20px',
      color: 'white',
      '&:hover': {
        backgroundColor: 'lightgreen'
      }
    }
  });
  
  export default styles;