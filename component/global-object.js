;(function ($) {
    try {
      $('export default global')
    } catch (e) {
      try {
        $('export default self')
      } catch (e) {
        try {
          module.exports = global
        } catch (e) {
          try {
            self.global = self
          } catch (e) {
            window.global = window
          }
        }
      }
    }
  })(eval)