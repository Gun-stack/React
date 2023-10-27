import { Breadcrumb,BreadcrumbItem } from 'reactstrap';
function BreadCrumbStrap(){
        return(
            <>
                <Breadcrumb tag='nav' listTag="div">
                    <BreadcrumbItem tag='a' href='#top'>Go Top</BreadcrumbItem>
                    <BreadcrumbItem active>Data</BreadcrumbItem>
                    <BreadcrumbItem tag='a' href='#bottom'>Go Bottom</BreadcrumbItem>
                    <BreadcrumbItem tag='span' href='#alert'>Go alert</BreadcrumbItem>
                </Breadcrumb>
                <div id='top' >
                    <span>top</span>
                </div>
                <div id='bottom' style={{margin:"1000px"}}>
                    <span>bottom</span>
                </div>
            </>
        )

}

export default BreadCrumbStrap;