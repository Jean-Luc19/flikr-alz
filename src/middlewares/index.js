export default ({ dispatch }) => next => action => {
  if(!action.payload.then){return next(action)}
  action.payload
    .then(res => {
      return res.json()
    })
    .then(json => {
      const newAction = {...action, payload: json.items}
      dispatch(newAction)
    })
}
