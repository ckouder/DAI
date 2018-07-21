// the following is the addon configuration file
// @param owner refers to the parent vue component

var Addons = function (owner) {
  var addons = [
    {
      name: 'Setting',
      method: () => {
        owner.showSetting = true
      }
    },
    {
      name: 'Dictionary',
      method: () => {}
    },
    {
      name: 'Ghost',
      method: () => {
        console.log('start inserting Ghost Template')
        owner.$emit('insert-ghost')
      }
    }
  ]

  return addons
}

export { Addons }
