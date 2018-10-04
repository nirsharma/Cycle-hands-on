import {Observable} from 'rxjs'
import { divs } from './divs.js'

export const slider = ({ DOM }) => {

    const range = Observable.of(<input type='range' id='range'></input>)

    const sinks = {
        DOM: range.combineLatest(divs({DOM}).DOM, (range, divs) => 
            <div>
                {range}
                <div>{divs}</div>
            </div>
        )
    }
    return sinks;
}
