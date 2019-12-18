import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function postValidator (title, description, content) {
  if(title === '' || title.length < 5 ) {
    toast.error('Title must be at least 5 characters long!');
    return false;
  }

  if(description === "" || description.length < 10 ) {
    toast.error('Description must be at least 10 characters long!');
    return false;
  }

  if(content === '' || content.length < 30 ) {
    toast.error('Content must be at least 30 characters long!');
    return false;
  }

  toast.success('Post created successfully!');
  return true;
}

export default postValidator;