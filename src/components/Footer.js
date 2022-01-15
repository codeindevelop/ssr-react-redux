import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'
import { Link } from "react-router-dom";

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>نمایش همه</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>نمایش فعال ها</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>تکمیل شده ها</FilterLink>
    <br>
    </br>
    <Link to="/page" style={{ paddingLeft: '2px' }}>برای تست لینک های سرور ساید رندر اینجا کلیک کنید</Link>
    
  </div>
)
export default Footer
