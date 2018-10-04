import Rx from 'rxjs'
import {run} from '@cycle/rxjs-run'
import {makeDOMDriver} from '@cycle/dom'
import _ from 'lodash'

import {slider} from './slider'


function main({ DOM }) {
    return {
        DOM : slider({DOM}).DOM
    }
}

const drivers = {
  DOM: makeDOMDriver('#app')
}

run(main, drivers)
