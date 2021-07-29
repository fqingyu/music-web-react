import React, { memo } from 'react';

import { DjradioPageWrapper} from './style';
import CMRadioCategory from '../radio-category'

export default memo(function CMDjradioPage() {
    return (
        <DjradioPageWrapper>
            <CMRadioCategory />
        </DjradioPageWrapper>
    )
})
