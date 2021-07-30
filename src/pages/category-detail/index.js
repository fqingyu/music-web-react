import React, { memo } from 'react';
import queryString from 'query-string';

import { CategoryDetailWrapper} from './style';
import CMRadioCategory from '@/pages/discover/c-pages/djradio/c-cpns/radio-category';

export default memo(function CMCategoryDetail(props) {
    // inner state
    const { id } = queryString.parse(props.location.search)

    return (
        <CategoryDetailWrapper>
            <CMRadioCategory select={id.toString()}/>
        </CategoryDetailWrapper>
    )
})
