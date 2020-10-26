import React from 'react'
import { Image } from 'antd';

export default function image({Img}) {
    return (
        <div>
            <Image
                width={'80%'}
                src={Img}
            />
        </div>
    );
}
