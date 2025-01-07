// helpers.js

export const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };
  
  export const formatPhoneNumber = (phone) => {
    return `+1 ${phone.slice(0, 3)}-${phone.slice(3, 6)}-${phone.slice(6, 10)}`;
  };
  
  export const getCaseStatus = (status) => {
    switch (status) {
      case 'OPEN':
        return 'Case is open and awaiting action.';
      case 'CLOSED':
        return 'Case has been closed.';
      case 'IN_PROGRESS':
        return 'Case is currently being reviewed or processed.';
      default:
        return 'Unknown status';
    }
  };
  
  export const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  export const sortByDate = (array) => {
    return array.sort((a, b) => new Date(b.date) - new Date(a.date));
  };
  