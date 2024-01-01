#!/usr/bin/env python3
"""function takes two integer arguments page and page_size

function returns tuple of size two containing start index
and end index
"""


from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    function takes 2 integer arguments 
    """
    return ((page-1) * page_size, page_size * page)
