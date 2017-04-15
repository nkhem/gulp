require 'test_helper'

class Api::BusinessesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_businesses_index_url
    assert_response :success
  end

  test "should get show" do
    get api_businesses_show_url
    assert_response :success
  end

end
