import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

type PaginacaoProps = {
    totalPages: number;
    first: boolean;
    last: boolean;
    currentPage: number;
    setCurrentPage: (page: number) => void;
    onChangePage?: (page: number) => void;
}
export const Paginacao: React.FC<PaginacaoProps> = ({totalPages, first, last, currentPage, setCurrentPage, onChangePage}) => {
    return (
        <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              onChange={() => onChangePage}
              disabled={first}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }).map((_, index) => (
            <PaginationItem key={index + 1}>
              <PaginationLink
                onClick={() => setCurrentPage(index + 1)}
                isActive={currentPage === index + 1}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              onChange={() => onChangePage}
              disabled={last}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
}