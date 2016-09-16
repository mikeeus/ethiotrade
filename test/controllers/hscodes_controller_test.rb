require 'test_helper'

class HscodesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @hscode = hscodes(:one)
  end

  test "should get index" do
    get hscodes_url, as: :json
    assert_response :success
  end

  test "should create hscode" do
    assert_difference('Hscode.count') do
      post hscodes_url, params: { hscode: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show hscode" do
    get hscode_url(@hscode), as: :json
    assert_response :success
  end

  test "should update hscode" do
    patch hscode_url(@hscode), params: { hscode: {  } }, as: :json
    assert_response 200
  end

  test "should destroy hscode" do
    assert_difference('Hscode.count', -1) do
      delete hscode_url(@hscode), as: :json
    end

    assert_response 204
  end
end
