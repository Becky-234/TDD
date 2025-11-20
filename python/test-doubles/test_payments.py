from unittest.mock import patch, Mock
from payments import get_user


def test_get_user_stub():
    fake_response = Mock()
    fake_response.json.return_value = {"id": 1, "name": "Alice"}

    with patch("requests.get", return_value=fake_response):
        result = get_user(1)

    assert result["name"] == "Alice"


from unittest.mock import patch
import math_utils

def test_area_of_rectangle_spy():
    # patch multiply with a spy that still calls the real function
    with patch("math_utils.multiply", wraps=math_utils.multiply) as spy:

        result = math_utils.area_of_rectangle(5, 10)

        # real multiply still ran
        assert result == 50

        # spy recorded the interactions
        spy.assert_called_once_with(5, 10)
