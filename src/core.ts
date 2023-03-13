import * as e from 'child_process'
namespace Core {
  function init(){
    console.log(`FILE:src/core.ts
                 FUNCTION: Core.init()
                 MESSAGE: Core initialized!
                 TIME: ${Date.now()}
    `)
    e.exec('')
  }
}