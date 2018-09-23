import axios from 'axios'

let RequestType = { GET: 0, POST: 1 };

const RestClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1',
  headers: {'X-Requested-With': 'XMLHttpRequest'}
});

RestClient.defaults.timeout = 20000; //20 seconds

RestClient.sendRequest = function(requestType, url, data, onSuccess, onError){
  switch (requestType){
    case RequestType.GET:
      RestClient.get(url).then(function(response) {
        onSuccess && onSuccess(response);
      }).catch(function(error) {
        onError && onError(error);
      });
      break;
    case RequestType.POST:
      RestClient.post(url, data).then(function(response) {
        onSuccess && onSuccess(response);
      }).catch(function(error) {
        onError && onError(error);
      });      
      break;
    default:
      console.log("Unhandled RequestType " + requestType);
      break;
  }
};

export default {
  
  // Get all registered Users
  getUsers(onSuccess, onError){
    RestClient.sendRequest(RequestType.GET, '/users', null, onSuccess, onError);
  },

  // Get all registered Devices
  getDevices(onSuccess, onError){
    RestClient.sendRequest(RequestType.GET, '/devices', null, onSuccess, onError);
  }
}