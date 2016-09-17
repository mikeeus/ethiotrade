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
    get hscode_url(@hscode.code), as: :json
    assert_response :success
  end

  test "should get search" do
    get hscodes_search_url('search'), as: :json
    assert_response :success
  end

  test "should get tables" do
    get hscode_tables_url(@hscode.code), as: :json
    assert_response :success
  end
    
end
