import React, { memo, useEffect, useState } from 'react';
import queryString from 'query-string';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getDjRadiosAction, getDjRadioRecommendAction } from './store/actionCreators';

import { CategoryDetailWrapper } from './style';
import CMRadioCategory from '@/pages/discover/c-pages/djradio/c-cpns/radio-category';
import CMGreatRadio from './c-cpns/great-radio';
import CMRanking from './c-cpns/ranking';
import CMPagination from '@/components/pagination';

export default memo(function CMCategoryDetail(props) {
    // inner state
    const { id, limit, offset } = queryString.parse(props.location.search);
    const [currentPage, setCurrentPage] = useState(1)

    // redux state
    const dispatch = useDispatch();
    const { totalItem } = useSelector(state => ({
        totalItem: state.getIn(["categoryDetail", "totalItem"]),
    }), shallowEqual)

    // other hooks
    useEffect(() => {
        dispatch(getDjRadiosAction(id, limit, offset))
        dispatch(getDjRadioRecommendAction(id));
    }, [dispatch, id, limit, offset])

    // other logics
    const history = useHistory();
    function onPageChange(page, pageSize) {
        const newOffset = (page - 1) * 24;
        setCurrentPage(page);
        history.push(`/discover/djradio/category?id=${id}&offset=${newOffset}&limit=24`);
    }

    return (
        <CategoryDetailWrapper>
            <CMRadioCategory select={id.toString()} />
            <CMGreatRadio />
            <CMRanking />
            <CMPagination currentPage={currentPage}
                total={totalItem}
                pageSize={24}
                onPageChange={onPageChange}
            />
        </CategoryDetailWrapper>
    )
})
