angular.module("app").directive "showsMessageWhenHovered", ->
  (scope, element, attributes) ->
    originalMessage = scope.message
    element.bind "mouseenter", ->
      scope.message = attributes.message
      scope.$apply()
      return

    element.bind "mouseleave", ->
      scope.message = originalMessage
      scope.$apply()
      return

    return
