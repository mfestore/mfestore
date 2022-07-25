
import React, { useState } from 'react';
import StoreLayout from '../../shared-modules/ui-layouts/StoreLayout';

const MfeHomePage = () => {

    const [hero, setHero] = useState(null);

    return (
        <StoreLayout.Wrapper>
            <StoreLayout.LeftPane>
                <StoreLayout.StoreItem
                    name='Card'
                    onClick={()=>setHero(<div>I am a card</div>)}
                />
                <StoreLayout.StoreItem
                    name='Scroller'
                    onClick={()=>setHero(<div>I am a Scroller</div>)}
                />
                <StoreLayout.StoreItem
                    name='Padded Scroller'
                    onClick={()=>setHero(<div>I am a Padded Scroller</div>)}
                />
            </StoreLayout.LeftPane>
            <StoreLayout.RightPane>
                {hero}
            </StoreLayout.RightPane>
        </StoreLayout.Wrapper>
    );
}
export default MfeHomePage;