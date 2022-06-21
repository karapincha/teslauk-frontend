import { useEffect, useState, useRef } from 'react'
import parse from 'html-react-parser'

export function replaceStringWithComponent(content: any, string: string, Component: any) {
  function flatMap(array: any, fn: any) {
    let result: any = []
    for (var i = 0; i < array.length; i++) {
      var mapping = fn(array[i])
      result = result.concat(mapping)
    }
    return result
  }

  if (content) {
    const prep = parse(content)

    const result = flatMap(content.split(string), function (part: any) {
      return [part, Component]
    })

    result.pop()

    const processed = result?.map((item: any, index: number) => {
      if (item && typeof item === 'string') {
        return parse(item)
      } else {
        return item
      }
    })

    return processed
  }

  return []
}
