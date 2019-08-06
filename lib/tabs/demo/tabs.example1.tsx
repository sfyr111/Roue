import * as React from "react";
import {Tabs,TabsHead,TabsBody,TabsItems,TabsPane} from "../tabs";

export default  function(){
    return(
        <Tabs>
            <TabsHead>
                <TabsItems name={1}>
                    Tab1
                </TabsItems>
                <TabsItems name={2}>
                   Tab2
                </TabsItems>
                <TabsItems name={3}>
                    Tab3
                </TabsItems>
            </TabsHead>
            <TabsBody>
                <TabsPane name={1}>
                    Content of tab 1
                </TabsPane>
                <TabsPane name={2}>
                    Content of tab 2
                </TabsPane>
                <TabsPane name={3}>
                    Content of tab 3
                </TabsPane>
            </TabsBody>
        </Tabs>
    )
}