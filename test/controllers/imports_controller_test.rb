require 'test_helper'

class ImportsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @import = imports(:one)
  end

  test "should get index" do
    get imports_url, as: :json
    assert_response :success
  end

  test "should create import" do
    assert_difference('Import.count') do
      post imports_url, params: { import: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show import" do
    get import_url(@import), as: :json
    assert_response :success
  end

  test "should update import" do
    patch import_url(@import), params: { import: {  } }, as: :json
    assert_response 200
  end

  test "should destroy import" do
    assert_difference('Import.count', -1) do
      delete import_url(@import), as: :json
    end

    assert_response 204
  end
end
