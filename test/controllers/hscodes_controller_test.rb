require 'test_helper'

class HscodesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @hscode = hscodes(:one)
  end

  test "should get index" do
    get hscodes_url, as: :json
    assert_response :success
  end

  test "should show hscode" do
    get hscode_url(@hscode), as: :json
    assert_response :success
  end

  # search
    

  # tables
    # renders imports and exports of hscode

end
