require 'test_helper'

class ExportsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @export = exports(:one)
  end

  test "should get index" do
    get exports_url, as: :json
    assert_response :success
  end

  test "should create export" do
    assert_difference('Export.count') do
      post exports_url, params: { export: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show export" do
    get export_url(@export), as: :json
    assert_response :success
  end

  test "should update export" do
    patch export_url(@export), params: { export: {  } }, as: :json
    assert_response 200
  end

  test "should destroy export" do
    assert_difference('Export.count', -1) do
      delete export_url(@export), as: :json
    end

    assert_response 204
  end
end
