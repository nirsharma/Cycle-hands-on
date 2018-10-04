import _ from 'lodash'

const style = {
    alignItems: `center`,
    backgroundColor: `#454545`,
    boxSizing: `border-box`,
    color: `#fcfcfc`,
    display: `inline-flex`,
    fontFamily: `sans-serif`,
    fontWeight: `700`,
    fontSize: `8px`,
    height: `32px`,
    justifyContent: `center`,
    margin: `8px`,
    width: `32px`
}

const div = (num) => (<div style={style}>{num+1}</div>)


export const divs = ({DOM}) => {

    const element = DOM
                    .select('#range')
                    .events('input')
                    .map(e => e.target.value)
                    .map(n => parseInt(n))
                    .startWith(0)
                    .map(n => _.range(n).map(div))

    return { DOM: element }
}
