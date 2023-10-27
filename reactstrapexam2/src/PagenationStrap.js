import {PaginationItem,Pagination,PaginationLink} from 'reactstrap';

function PagenationStrap(){
    return(
        <div>
            <Pagination size='lg'>
                <PaginationItem disabled >
                    <PaginationLink first href="#" />
                </PaginationItem>
                <PaginationItem disabled>
                    <PaginationLink href="#" previous/>
                </PaginationItem>
                <PaginationItem active>
                    <PaginationLink href="?page=1" >1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="?page=2">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="?page=3">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="?page=4">4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="?page=5">5</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" next/>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" last/>
                </PaginationItem>
            </Pagination>
        </div>
    )
}
export default PagenationStrap;